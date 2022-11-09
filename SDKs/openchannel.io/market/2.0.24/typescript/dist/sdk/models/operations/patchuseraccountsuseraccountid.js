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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PatchUserAccountsUserAccountIdPathParams = /** @class */ (function (_super) {
    __extends(PatchUserAccountsUserAccountIdPathParams, _super);
    function PatchUserAccountsUserAccountIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userAccountId" }),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdPathParams.prototype, "userAccountId", void 0);
    return PatchUserAccountsUserAccountIdPathParams;
}(SpeakeasyBase));
export { PatchUserAccountsUserAccountIdPathParams };
var PatchUserAccountsUserAccountIdQueryParams = /** @class */ (function (_super) {
    __extends(PatchUserAccountsUserAccountIdQueryParams, _super);
    function PatchUserAccountsUserAccountIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdQueryParams.prototype, "customData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdQueryParams.prototype, "userId", void 0);
    return PatchUserAccountsUserAccountIdQueryParams;
}(SpeakeasyBase));
export { PatchUserAccountsUserAccountIdQueryParams };
var PatchUserAccountsUserAccountIdRequest = /** @class */ (function (_super) {
    __extends(PatchUserAccountsUserAccountIdRequest, _super);
    function PatchUserAccountsUserAccountIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchUserAccountsUserAccountIdPathParams)
    ], PatchUserAccountsUserAccountIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchUserAccountsUserAccountIdQueryParams)
    ], PatchUserAccountsUserAccountIdRequest.prototype, "queryParams", void 0);
    return PatchUserAccountsUserAccountIdRequest;
}(SpeakeasyBase));
export { PatchUserAccountsUserAccountIdRequest };
var PatchUserAccountsUserAccountIdResponse = /** @class */ (function (_super) {
    __extends(PatchUserAccountsUserAccountIdResponse, _super);
    function PatchUserAccountsUserAccountIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PatchUserAccountsUserAccountIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchUserAccountsUserAccountIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchUserAccountsUserAccountIdResponse.prototype, "statusCode", void 0);
    return PatchUserAccountsUserAccountIdResponse;
}(SpeakeasyBase));
export { PatchUserAccountsUserAccountIdResponse };
