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
import { GoogleCloudAssetV1Rule } from "./googlecloudassetv1rule";
// AnalyzerOrgPolicy
/**
 * This organization policy message is a modified version of the one defined in the OrgPolicy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
**/
var AnalyzerOrgPolicy = /** @class */ (function (_super) {
    __extends(AnalyzerOrgPolicy, _super);
    function AnalyzerOrgPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appliedResource" }),
        __metadata("design:type", String)
    ], AnalyzerOrgPolicy.prototype, "appliedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachedResource" }),
        __metadata("design:type", String)
    ], AnalyzerOrgPolicy.prototype, "attachedResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritFromParent" }),
        __metadata("design:type", Boolean)
    ], AnalyzerOrgPolicy.prototype, "inheritFromParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reset" }),
        __metadata("design:type", Boolean)
    ], AnalyzerOrgPolicy.prototype, "reset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudAssetV1Rule }),
        __metadata("design:type", Array)
    ], AnalyzerOrgPolicy.prototype, "rules", void 0);
    return AnalyzerOrgPolicy;
}(SpeakeasyBase));
export { AnalyzerOrgPolicy };
