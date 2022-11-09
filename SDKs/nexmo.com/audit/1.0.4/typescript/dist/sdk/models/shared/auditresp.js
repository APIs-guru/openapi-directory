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
import * as shared from "../shared";
import { PaginationLinks } from "./paginationlinks";
import { PaginationData } from "./paginationdata";
// AuditRespEmbedded
/**
 * Container containing the `events` array.
**/
var AuditRespEmbedded = /** @class */ (function (_super) {
    __extends(AuditRespEmbedded, _super);
    function AuditRespEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=events", elemType: shared.AuditEvent }),
        __metadata("design:type", Array)
    ], AuditRespEmbedded.prototype, "events", void 0);
    return AuditRespEmbedded;
}(SpeakeasyBase));
export { AuditRespEmbedded };
var AuditResp = /** @class */ (function (_super) {
    __extends(AuditResp, _super);
    function AuditResp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_embedded" }),
        __metadata("design:type", AuditRespEmbedded)
    ], AuditResp.prototype, "embedded", void 0);
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", PaginationLinks)
    ], AuditResp.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", PaginationData)
    ], AuditResp.prototype, "page", void 0);
    return AuditResp;
}(SpeakeasyBase));
export { AuditResp };
