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
var RealtimebiddingBuyersUserListsClosePathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsClosePathParams, _super);
    function RealtimebiddingBuyersUserListsClosePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsClosePathParams.prototype, "name", void 0);
    return RealtimebiddingBuyersUserListsClosePathParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsClosePathParams };
var RealtimebiddingBuyersUserListsCloseQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsCloseQueryParams, _super);
    function RealtimebiddingBuyersUserListsCloseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBuyersUserListsCloseQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsCloseQueryParams };
var RealtimebiddingBuyersUserListsCloseSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsCloseSecurity, _super);
    function RealtimebiddingBuyersUserListsCloseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBuyersUserListsCloseSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBuyersUserListsCloseSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBuyersUserListsCloseSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsCloseSecurity };
var RealtimebiddingBuyersUserListsCloseRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsCloseRequest, _super);
    function RealtimebiddingBuyersUserListsCloseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsClosePathParams)
    ], RealtimebiddingBuyersUserListsCloseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsCloseQueryParams)
    ], RealtimebiddingBuyersUserListsCloseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], RealtimebiddingBuyersUserListsCloseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsCloseSecurity)
    ], RealtimebiddingBuyersUserListsCloseRequest.prototype, "security", void 0);
    return RealtimebiddingBuyersUserListsCloseRequest;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsCloseRequest };
var RealtimebiddingBuyersUserListsCloseResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsCloseResponse, _super);
    function RealtimebiddingBuyersUserListsCloseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsCloseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersUserListsCloseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserList)
    ], RealtimebiddingBuyersUserListsCloseResponse.prototype, "userList", void 0);
    return RealtimebiddingBuyersUserListsCloseResponse;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsCloseResponse };
