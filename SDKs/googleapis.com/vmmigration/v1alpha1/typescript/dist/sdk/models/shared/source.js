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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSourceDetails } from "./awssourcedetails";
import { Status } from "./status";
import { VmwareSourceDetails } from "./vmwaresourcedetails";
import { AwsSourceDetailsInput } from "./awssourcedetails";
// Source
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aws" }),
        __metadata("design:type", AwsSourceDetails)
    ], Source.prototype, "aws", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Source.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Source.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], Source.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Source.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Source.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Source.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmware" }),
        __metadata("design:type", VmwareSourceDetails)
    ], Source.prototype, "vmware", void 0);
    return Source;
}(SpeakeasyBase));
export { Source };
// SourceInput
/**
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
var SourceInput = /** @class */ (function (_super) {
    __extends(SourceInput, _super);
    function SourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aws" }),
        __metadata("design:type", AwsSourceDetailsInput)
    ], SourceInput.prototype, "aws", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SourceInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], SourceInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], SourceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmware" }),
        __metadata("design:type", VmwareSourceDetails)
    ], SourceInput.prototype, "vmware", void 0);
    return SourceInput;
}(SpeakeasyBase));
export { SourceInput };
