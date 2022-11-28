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
var ClouderrorreportingProjectsDeleteEventsPathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsDeleteEventsPathParams, _super);
    function ClouderrorreportingProjectsDeleteEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsPathParams.prototype, "projectName", void 0);
    return ClouderrorreportingProjectsDeleteEventsPathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsDeleteEventsPathParams };
var ClouderrorreportingProjectsDeleteEventsQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsDeleteEventsQueryParams, _super);
    function ClouderrorreportingProjectsDeleteEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsDeleteEventsQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsDeleteEventsQueryParams };
var ClouderrorreportingProjectsDeleteEventsSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsDeleteEventsSecurity, _super);
    function ClouderrorreportingProjectsDeleteEventsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsDeleteEventsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsDeleteEventsSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsDeleteEventsSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsDeleteEventsSecurity };
var ClouderrorreportingProjectsDeleteEventsRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsDeleteEventsRequest, _super);
    function ClouderrorreportingProjectsDeleteEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsDeleteEventsPathParams)
    ], ClouderrorreportingProjectsDeleteEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsDeleteEventsQueryParams)
    ], ClouderrorreportingProjectsDeleteEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsDeleteEventsSecurity)
    ], ClouderrorreportingProjectsDeleteEventsRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsDeleteEventsRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsDeleteEventsRequest };
var ClouderrorreportingProjectsDeleteEventsResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsDeleteEventsResponse, _super);
    function ClouderrorreportingProjectsDeleteEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsDeleteEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ClouderrorreportingProjectsDeleteEventsResponse.prototype, "deleteEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsDeleteEventsResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsDeleteEventsResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsDeleteEventsResponse };
