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
var DrivelabelsLabelsRevisionsPermissionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsDeletePathParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeletePathParams.prototype, "name", void 0);
    return DrivelabelsLabelsRevisionsPermissionsDeletePathParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsDeletePathParams };
var DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams, _super);
    function DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "useAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=writeControl.requiredRevisionId" }),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams.prototype, "writeControlRequiredRevisionId", void 0);
    return DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams };
var DrivelabelsLabelsRevisionsPermissionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsDeleteRequest, _super);
    function DrivelabelsLabelsRevisionsPermissionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsDeletePathParams)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteRequest.prototype, "queryParams", void 0);
    return DrivelabelsLabelsRevisionsPermissionsDeleteRequest;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsDeleteRequest };
var DrivelabelsLabelsRevisionsPermissionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DrivelabelsLabelsRevisionsPermissionsDeleteResponse, _super);
    function DrivelabelsLabelsRevisionsPermissionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivelabelsLabelsRevisionsPermissionsDeleteResponse.prototype, "statusCode", void 0);
    return DrivelabelsLabelsRevisionsPermissionsDeleteResponse;
}(SpeakeasyBase));
export { DrivelabelsLabelsRevisionsPermissionsDeleteResponse };
