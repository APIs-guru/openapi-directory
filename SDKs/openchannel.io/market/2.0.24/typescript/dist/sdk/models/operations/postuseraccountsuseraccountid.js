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
var PostUserAccountsUserAccountIdPathParams = /** @class */ (function (_super) {
    __extends(PostUserAccountsUserAccountIdPathParams, _super);
    function PostUserAccountsUserAccountIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" }),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdPathParams.prototype, "userAccountId", void 0);
    return PostUserAccountsUserAccountIdPathParams;
}(SpeakeasyBase));
export { PostUserAccountsUserAccountIdPathParams };
var PostUserAccountsUserAccountIdQueryParams = /** @class */ (function (_super) {
    __extends(PostUserAccountsUserAccountIdQueryParams, _super);
    function PostUserAccountsUserAccountIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdQueryParams.prototype, "customData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdQueryParams.prototype, "userId", void 0);
    return PostUserAccountsUserAccountIdQueryParams;
}(SpeakeasyBase));
export { PostUserAccountsUserAccountIdQueryParams };
var PostUserAccountsUserAccountIdRequest = /** @class */ (function (_super) {
    __extends(PostUserAccountsUserAccountIdRequest, _super);
    function PostUserAccountsUserAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUserAccountsUserAccountIdPathParams)
    ], PostUserAccountsUserAccountIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostUserAccountsUserAccountIdQueryParams)
    ], PostUserAccountsUserAccountIdRequest.prototype, "queryParams", void 0);
    return PostUserAccountsUserAccountIdRequest;
}(SpeakeasyBase));
export { PostUserAccountsUserAccountIdRequest };
var PostUserAccountsUserAccountIdResponse = /** @class */ (function (_super) {
    __extends(PostUserAccountsUserAccountIdResponse, _super);
    function PostUserAccountsUserAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostUserAccountsUserAccountIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUserAccountsUserAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUserAccountsUserAccountIdResponse.prototype, "statusCode", void 0);
    return PostUserAccountsUserAccountIdResponse;
}(SpeakeasyBase));
export { PostUserAccountsUserAccountIdResponse };
