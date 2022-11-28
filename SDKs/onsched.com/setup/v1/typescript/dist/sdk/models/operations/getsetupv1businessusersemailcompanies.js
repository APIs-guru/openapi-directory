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
var GetSetupV1BusinessusersEmailCompaniesPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersEmailCompaniesPathParams, _super);
    function GetSetupV1BusinessusersEmailCompaniesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=email" }),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersEmailCompaniesPathParams.prototype, "email", void 0);
    return GetSetupV1BusinessusersEmailCompaniesPathParams;
}(SpeakeasyBase));
export { GetSetupV1BusinessusersEmailCompaniesPathParams };
var GetSetupV1BusinessusersEmailCompaniesQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersEmailCompaniesQueryParams, _super);
    function GetSetupV1BusinessusersEmailCompaniesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersEmailCompaniesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersEmailCompaniesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchText" }),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersEmailCompaniesQueryParams.prototype, "searchText", void 0);
    return GetSetupV1BusinessusersEmailCompaniesQueryParams;
}(SpeakeasyBase));
export { GetSetupV1BusinessusersEmailCompaniesQueryParams };
var GetSetupV1BusinessusersEmailCompaniesRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersEmailCompaniesRequest, _super);
    function GetSetupV1BusinessusersEmailCompaniesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1BusinessusersEmailCompaniesPathParams)
    ], GetSetupV1BusinessusersEmailCompaniesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1BusinessusersEmailCompaniesQueryParams)
    ], GetSetupV1BusinessusersEmailCompaniesRequest.prototype, "queryParams", void 0);
    return GetSetupV1BusinessusersEmailCompaniesRequest;
}(SpeakeasyBase));
export { GetSetupV1BusinessusersEmailCompaniesRequest };
var GetSetupV1BusinessusersEmailCompaniesResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1BusinessusersEmailCompaniesResponse, _super);
    function GetSetupV1BusinessusersEmailCompaniesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthorizedCompanyListViewModel)
    ], GetSetupV1BusinessusersEmailCompaniesResponse.prototype, "authorizedCompanyListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1BusinessusersEmailCompaniesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1BusinessusersEmailCompaniesResponse.prototype, "statusCode", void 0);
    return GetSetupV1BusinessusersEmailCompaniesResponse;
}(SpeakeasyBase));
export { GetSetupV1BusinessusersEmailCompaniesResponse };
