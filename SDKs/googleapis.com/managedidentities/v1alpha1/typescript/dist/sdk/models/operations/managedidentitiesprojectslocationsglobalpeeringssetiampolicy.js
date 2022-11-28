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
var ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams.prototype, "resource", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams };
var ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity };
var ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyPathParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyQueryParams)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicySecurity)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest.prototype, "security", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest };
var ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse, _super);
    function ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse;
}(SpeakeasyBase));
export { ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse };
