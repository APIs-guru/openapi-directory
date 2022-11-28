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
export var AbortInfoCauseEnum;
(function (AbortInfoCauseEnum) {
    AbortInfoCauseEnum["CauseUnspecified"] = "CAUSE_UNSPECIFIED";
    AbortInfoCauseEnum["UnknownNetwork"] = "UNKNOWN_NETWORK";
    AbortInfoCauseEnum["UnknownIp"] = "UNKNOWN_IP";
    AbortInfoCauseEnum["UnknownProject"] = "UNKNOWN_PROJECT";
    AbortInfoCauseEnum["PermissionDenied"] = "PERMISSION_DENIED";
    AbortInfoCauseEnum["NoSourceLocation"] = "NO_SOURCE_LOCATION";
    AbortInfoCauseEnum["InvalidArgument"] = "INVALID_ARGUMENT";
    AbortInfoCauseEnum["NoExternalIp"] = "NO_EXTERNAL_IP";
    AbortInfoCauseEnum["UnintendedDestination"] = "UNINTENDED_DESTINATION";
    AbortInfoCauseEnum["TraceTooLong"] = "TRACE_TOO_LONG";
    AbortInfoCauseEnum["InternalError"] = "INTERNAL_ERROR";
    AbortInfoCauseEnum["SourceEndpointNotFound"] = "SOURCE_ENDPOINT_NOT_FOUND";
    AbortInfoCauseEnum["MismatchedSourceNetwork"] = "MISMATCHED_SOURCE_NETWORK";
    AbortInfoCauseEnum["DestinationEndpointNotFound"] = "DESTINATION_ENDPOINT_NOT_FOUND";
    AbortInfoCauseEnum["MismatchedDestinationNetwork"] = "MISMATCHED_DESTINATION_NETWORK";
    AbortInfoCauseEnum["Unsupported"] = "UNSUPPORTED";
    AbortInfoCauseEnum["MismatchedIpVersion"] = "MISMATCHED_IP_VERSION";
    AbortInfoCauseEnum["GkeKonnectivityProxyUnsupported"] = "GKE_KONNECTIVITY_PROXY_UNSUPPORTED";
})(AbortInfoCauseEnum || (AbortInfoCauseEnum = {}));
// AbortInfo
/**
 * Details of the final state "abort" and associated resource.
**/
var AbortInfo = /** @class */ (function (_super) {
    __extends(AbortInfo, _super);
    function AbortInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], AbortInfo.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectsMissingPermission" }),
        __metadata("design:type", Array)
    ], AbortInfo.prototype, "projectsMissingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUri" }),
        __metadata("design:type", String)
    ], AbortInfo.prototype, "resourceUri", void 0);
    return AbortInfo;
}(SpeakeasyBase));
export { AbortInfo };
