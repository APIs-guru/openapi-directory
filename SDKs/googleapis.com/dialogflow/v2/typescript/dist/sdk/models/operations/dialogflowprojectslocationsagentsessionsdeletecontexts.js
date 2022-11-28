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
var DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams.prototype, "parent", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1 };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2 };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption1)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurityOption2)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDeleteContextsPathParams)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDeleteContextsQueryParams)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentSessionsDeleteContextsSecurity)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest };
var DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse, _super);
    function DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse };
