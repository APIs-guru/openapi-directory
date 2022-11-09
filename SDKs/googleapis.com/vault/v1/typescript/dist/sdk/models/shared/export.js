var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudStorageSink } from "./cloudstoragesink";
import { ExportOptions } from "./exportoptions";
import { Query } from "./query";
import { UserInfo } from "./userinfo";
import { ExportStats } from "./exportstats";
export var ExportStatusEnum;
(function (ExportStatusEnum) {
    ExportStatusEnum["ExportStatusUnspecified"] = "EXPORT_STATUS_UNSPECIFIED";
    ExportStatusEnum["Completed"] = "COMPLETED";
    ExportStatusEnum["Failed"] = "FAILED";
    ExportStatusEnum["InProgress"] = "IN_PROGRESS";
})(ExportStatusEnum || (ExportStatusEnum = {}));
// Export
/**
 * An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
var Export = /** @class */ (function (_super) {
    __extends(Export, _super);
    function Export() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cloudStorageSink" }),
        __metadata("design:type", CloudStorageSink)
    ], Export.prototype, "cloudStorageSink", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Export.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=exportOptions" }),
        __metadata("design:type", ExportOptions)
    ], Export.prototype, "exportOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Export.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=matterId" }),
        __metadata("design:type", String)
    ], Export.prototype, "matterId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Export.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=query" }),
        __metadata("design:type", Query)
    ], Export.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "json, name=requester" }),
        __metadata("design:type", UserInfo)
    ], Export.prototype, "requester", void 0);
    __decorate([
        Metadata({ data: "json, name=stats" }),
        __metadata("design:type", ExportStats)
    ], Export.prototype, "stats", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Export.prototype, "status", void 0);
    return Export;
}(SpeakeasyBase));
export { Export };
