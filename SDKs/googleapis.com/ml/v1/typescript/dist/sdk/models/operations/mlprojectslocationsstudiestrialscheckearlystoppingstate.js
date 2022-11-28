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
var MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams, _super);
    function MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams.prototype, "name", void 0);
    return MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams };
var MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams, _super);
    function MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams };
var MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity, _super);
    function MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity.prototype, "oauth2c", void 0);
    return MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity };
var MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest, _super);
    function MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest.prototype, "security", void 0);
    return MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest };
var MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse, _super);
    function MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse.prototype, "statusCode", void 0);
    return MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse };
