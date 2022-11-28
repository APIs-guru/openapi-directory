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
var DataflowProjectsLocationsWorkerMessagesPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesPathParams, _super);
    function DataflowProjectsLocationsWorkerMessagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsWorkerMessagesPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesPathParams };
var DataflowProjectsLocationsWorkerMessagesQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesQueryParams, _super);
    function DataflowProjectsLocationsWorkerMessagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsWorkerMessagesQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesQueryParams };
var DataflowProjectsLocationsWorkerMessagesSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesSecurityOption1, _super);
    function DataflowProjectsLocationsWorkerMessagesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsWorkerMessagesSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesSecurityOption1 };
var DataflowProjectsLocationsWorkerMessagesSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesSecurityOption2, _super);
    function DataflowProjectsLocationsWorkerMessagesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsWorkerMessagesSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesSecurityOption2 };
var DataflowProjectsLocationsWorkerMessagesSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesSecurityOption3, _super);
    function DataflowProjectsLocationsWorkerMessagesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsWorkerMessagesSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesSecurityOption3 };
var DataflowProjectsLocationsWorkerMessagesSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesSecurityOption4, _super);
    function DataflowProjectsLocationsWorkerMessagesSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsWorkerMessagesSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsWorkerMessagesSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesSecurityOption4 };
var DataflowProjectsLocationsWorkerMessagesSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesSecurity, _super);
    function DataflowProjectsLocationsWorkerMessagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesSecurityOption1)
    ], DataflowProjectsLocationsWorkerMessagesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesSecurityOption2)
    ], DataflowProjectsLocationsWorkerMessagesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesSecurityOption3)
    ], DataflowProjectsLocationsWorkerMessagesSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesSecurityOption4)
    ], DataflowProjectsLocationsWorkerMessagesSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsWorkerMessagesSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesSecurity };
var DataflowProjectsLocationsWorkerMessagesRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesRequest, _super);
    function DataflowProjectsLocationsWorkerMessagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesPathParams)
    ], DataflowProjectsLocationsWorkerMessagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesQueryParams)
    ], DataflowProjectsLocationsWorkerMessagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendWorkerMessagesRequest)
    ], DataflowProjectsLocationsWorkerMessagesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsWorkerMessagesSecurity)
    ], DataflowProjectsLocationsWorkerMessagesRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsWorkerMessagesRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesRequest };
var DataflowProjectsLocationsWorkerMessagesResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsWorkerMessagesResponse, _super);
    function DataflowProjectsLocationsWorkerMessagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsWorkerMessagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendWorkerMessagesResponse)
    ], DataflowProjectsLocationsWorkerMessagesResponse.prototype, "sendWorkerMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsWorkerMessagesResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsWorkerMessagesResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsWorkerMessagesResponse };
