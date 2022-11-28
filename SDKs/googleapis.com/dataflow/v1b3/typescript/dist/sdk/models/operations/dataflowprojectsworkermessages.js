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
var DataflowProjectsWorkerMessagesPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesPathParams, _super);
    function DataflowProjectsWorkerMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesPathParams.prototype, "projectId", void 0);
    return DataflowProjectsWorkerMessagesPathParams;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesPathParams };
var DataflowProjectsWorkerMessagesQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesQueryParams, _super);
    function DataflowProjectsWorkerMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsWorkerMessagesQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesQueryParams };
var DataflowProjectsWorkerMessagesSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesSecurityOption1, _super);
    function DataflowProjectsWorkerMessagesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsWorkerMessagesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsWorkerMessagesSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsWorkerMessagesSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesSecurityOption1 };
var DataflowProjectsWorkerMessagesSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesSecurityOption2, _super);
    function DataflowProjectsWorkerMessagesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsWorkerMessagesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsWorkerMessagesSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsWorkerMessagesSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesSecurityOption2 };
var DataflowProjectsWorkerMessagesSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesSecurityOption3, _super);
    function DataflowProjectsWorkerMessagesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsWorkerMessagesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsWorkerMessagesSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsWorkerMessagesSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesSecurityOption3 };
var DataflowProjectsWorkerMessagesSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesSecurityOption4, _super);
    function DataflowProjectsWorkerMessagesSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsWorkerMessagesSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsWorkerMessagesSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsWorkerMessagesSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesSecurityOption4 };
var DataflowProjectsWorkerMessagesSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesSecurity, _super);
    function DataflowProjectsWorkerMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsWorkerMessagesSecurityOption1)
    ], DataflowProjectsWorkerMessagesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsWorkerMessagesSecurityOption2)
    ], DataflowProjectsWorkerMessagesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsWorkerMessagesSecurityOption3)
    ], DataflowProjectsWorkerMessagesSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsWorkerMessagesSecurityOption4)
    ], DataflowProjectsWorkerMessagesSecurity.prototype, "option4", void 0);
    return DataflowProjectsWorkerMessagesSecurity;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesSecurity };
var DataflowProjectsWorkerMessagesRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesRequest, _super);
    function DataflowProjectsWorkerMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsWorkerMessagesPathParams)
    ], DataflowProjectsWorkerMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsWorkerMessagesQueryParams)
    ], DataflowProjectsWorkerMessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendWorkerMessagesRequest)
    ], DataflowProjectsWorkerMessagesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsWorkerMessagesSecurity)
    ], DataflowProjectsWorkerMessagesRequest.prototype, "security", void 0);
    return DataflowProjectsWorkerMessagesRequest;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesRequest };
var DataflowProjectsWorkerMessagesResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsWorkerMessagesResponse, _super);
    function DataflowProjectsWorkerMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsWorkerMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendWorkerMessagesResponse)
    ], DataflowProjectsWorkerMessagesResponse.prototype, "sendWorkerMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsWorkerMessagesResponse.prototype, "statusCode", void 0);
    return DataflowProjectsWorkerMessagesResponse;
}(SpeakeasyBase));
export { DataflowProjectsWorkerMessagesResponse };
