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
import { GoogleCloudOrgpolicyV1BooleanPolicy } from "./googlecloudorgpolicyv1booleanpolicy";
import { GoogleCloudOrgpolicyV1ListPolicy } from "./googlecloudorgpolicyv1listpolicy";
// GoogleCloudOrgpolicyV1Policy
/**
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
var GoogleCloudOrgpolicyV1Policy = /** @class */ (function (_super) {
    __extends(GoogleCloudOrgpolicyV1Policy, _super);
    function GoogleCloudOrgpolicyV1Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=booleanPolicy" }),
        __metadata("design:type", GoogleCloudOrgpolicyV1BooleanPolicy)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "booleanPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=constraint" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "constraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listPolicy" }),
        __metadata("design:type", GoogleCloudOrgpolicyV1ListPolicy)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "listPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restoreDefault" }),
        __metadata("design:type", Map)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "restoreDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GoogleCloudOrgpolicyV1Policy.prototype, "version", void 0);
    return GoogleCloudOrgpolicyV1Policy;
}(SpeakeasyBase));
export { GoogleCloudOrgpolicyV1Policy };
