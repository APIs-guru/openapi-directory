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
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";
export var GoogleCloudSecuritycenterV1beta1FindingStateEnum;
(function (GoogleCloudSecuritycenterV1beta1FindingStateEnum) {
    GoogleCloudSecuritycenterV1beta1FindingStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudSecuritycenterV1beta1FindingStateEnum["Active"] = "ACTIVE";
    GoogleCloudSecuritycenterV1beta1FindingStateEnum["Inactive"] = "INACTIVE";
})(GoogleCloudSecuritycenterV1beta1FindingStateEnum || (GoogleCloudSecuritycenterV1beta1FindingStateEnum = {}));
// GoogleCloudSecuritycenterV1beta1Finding
/**
 * Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.
**/
var GoogleCloudSecuritycenterV1beta1Finding = /** @class */ (function (_super) {
    __extends(GoogleCloudSecuritycenterV1beta1Finding, _super);
    function GoogleCloudSecuritycenterV1beta1Finding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "eventTime", void 0);
    __decorate([
        Metadata({ data: "json, name=externalUri" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "externalUri", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "parent", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "resourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=securityMarks" }),
        __metadata("design:type", GoogleCloudSecuritycenterV1beta1SecurityMarks)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "securityMarks", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceProperties" }),
        __metadata("design:type", Map)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "sourceProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1beta1Finding.prototype, "state", void 0);
    return GoogleCloudSecuritycenterV1beta1Finding;
}(SpeakeasyBase));
export { GoogleCloudSecuritycenterV1beta1Finding };
