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
import * as shared from "../shared";
var OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams, _super);
    function OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams.prototype, "instance", void 0);
    return OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams };
var OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams, _super);
    function OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams };
var OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity, _super);
    function OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity;
}(SpeakeasyBase));
export { OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity };
var OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest, _super);
    function OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyPathParams)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyQueryParams)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LookupEffectiveGuestPolicyRequest)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicySecurity)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest.prototype, "security", void 0);
    return OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest;
}(SpeakeasyBase));
export { OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest };
var OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse, _super);
    function OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EffectiveGuestPolicy)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse.prototype, "effectiveGuestPolicy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse;
}(SpeakeasyBase));
export { OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse };
