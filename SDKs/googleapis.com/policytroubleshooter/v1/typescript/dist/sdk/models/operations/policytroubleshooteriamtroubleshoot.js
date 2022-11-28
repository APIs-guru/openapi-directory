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
var PolicytroubleshooterIamTroubleshootQueryParams = /** @class */ (function (_super) {
    __extends(PolicytroubleshooterIamTroubleshootQueryParams, _super);
    function PolicytroubleshooterIamTroubleshootQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootQueryParams.prototype, "uploadProtocol", void 0);
    return PolicytroubleshooterIamTroubleshootQueryParams;
}(SpeakeasyBase));
export { PolicytroubleshooterIamTroubleshootQueryParams };
var PolicytroubleshooterIamTroubleshootSecurity = /** @class */ (function (_super) {
    __extends(PolicytroubleshooterIamTroubleshootSecurity, _super);
    function PolicytroubleshooterIamTroubleshootSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PolicytroubleshooterIamTroubleshootSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PolicytroubleshooterIamTroubleshootSecurity.prototype, "oauth2c", void 0);
    return PolicytroubleshooterIamTroubleshootSecurity;
}(SpeakeasyBase));
export { PolicytroubleshooterIamTroubleshootSecurity };
var PolicytroubleshooterIamTroubleshootRequest = /** @class */ (function (_super) {
    __extends(PolicytroubleshooterIamTroubleshootRequest, _super);
    function PolicytroubleshooterIamTroubleshootRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PolicytroubleshooterIamTroubleshootQueryParams)
    ], PolicytroubleshooterIamTroubleshootRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest)
    ], PolicytroubleshooterIamTroubleshootRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PolicytroubleshooterIamTroubleshootSecurity)
    ], PolicytroubleshooterIamTroubleshootRequest.prototype, "security", void 0);
    return PolicytroubleshooterIamTroubleshootRequest;
}(SpeakeasyBase));
export { PolicytroubleshooterIamTroubleshootRequest };
var PolicytroubleshooterIamTroubleshootResponse = /** @class */ (function (_super) {
    __extends(PolicytroubleshooterIamTroubleshootResponse, _super);
    function PolicytroubleshooterIamTroubleshootResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PolicytroubleshooterIamTroubleshootResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse)
    ], PolicytroubleshooterIamTroubleshootResponse.prototype, "googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PolicytroubleshooterIamTroubleshootResponse.prototype, "statusCode", void 0);
    return PolicytroubleshooterIamTroubleshootResponse;
}(SpeakeasyBase));
export { PolicytroubleshooterIamTroubleshootResponse };
