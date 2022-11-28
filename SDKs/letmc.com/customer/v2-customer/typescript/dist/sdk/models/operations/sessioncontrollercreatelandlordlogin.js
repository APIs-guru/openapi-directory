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
var SessionControllerCreateLandlordLoginPathParams = /** @class */ (function (_super) {
    __extends(SessionControllerCreateLandlordLoginPathParams, _super);
    function SessionControllerCreateLandlordLoginPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginPathParams.prototype, "shortName", void 0);
    return SessionControllerCreateLandlordLoginPathParams;
}(SpeakeasyBase));
export { SessionControllerCreateLandlordLoginPathParams };
var SessionControllerCreateLandlordLoginQueryParams = /** @class */ (function (_super) {
    __extends(SessionControllerCreateLandlordLoginQueryParams, _super);
    function SessionControllerCreateLandlordLoginQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branchID" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "branchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactDetails" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "contactDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forename" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "forename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propertyAddress" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "propertyAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=surname" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "surname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginQueryParams.prototype, "title", void 0);
    return SessionControllerCreateLandlordLoginQueryParams;
}(SpeakeasyBase));
export { SessionControllerCreateLandlordLoginQueryParams };
var SessionControllerCreateLandlordLoginRequest = /** @class */ (function (_super) {
    __extends(SessionControllerCreateLandlordLoginRequest, _super);
    function SessionControllerCreateLandlordLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionControllerCreateLandlordLoginPathParams)
    ], SessionControllerCreateLandlordLoginRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionControllerCreateLandlordLoginQueryParams)
    ], SessionControllerCreateLandlordLoginRequest.prototype, "queryParams", void 0);
    return SessionControllerCreateLandlordLoginRequest;
}(SpeakeasyBase));
export { SessionControllerCreateLandlordLoginRequest };
var SessionControllerCreateLandlordLoginResponse = /** @class */ (function (_super) {
    __extends(SessionControllerCreateLandlordLoginResponse, _super);
    function SessionControllerCreateLandlordLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SessionControllerCreateLandlordLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SessionControllerCreateLandlordLoginResponse.prototype, "statusCode", void 0);
    return SessionControllerCreateLandlordLoginResponse;
}(SpeakeasyBase));
export { SessionControllerCreateLandlordLoginResponse };
