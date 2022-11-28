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
var SessionControllerChangePasswordPathParams = /** @class */ (function (_super) {
    __extends(SessionControllerChangePasswordPathParams, _super);
    function SessionControllerChangePasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], SessionControllerChangePasswordPathParams.prototype, "shortName", void 0);
    return SessionControllerChangePasswordPathParams;
}(SpeakeasyBase));
export { SessionControllerChangePasswordPathParams };
var SessionControllerChangePasswordQueryParams = /** @class */ (function (_super) {
    __extends(SessionControllerChangePasswordQueryParams, _super);
    function SessionControllerChangePasswordQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" }),
        __metadata("design:type", String)
    ], SessionControllerChangePasswordQueryParams.prototype, "newPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oldPassword" }),
        __metadata("design:type", String)
    ], SessionControllerChangePasswordQueryParams.prototype, "oldPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], SessionControllerChangePasswordQueryParams.prototype, "token", void 0);
    return SessionControllerChangePasswordQueryParams;
}(SpeakeasyBase));
export { SessionControllerChangePasswordQueryParams };
var SessionControllerChangePasswordRequest = /** @class */ (function (_super) {
    __extends(SessionControllerChangePasswordRequest, _super);
    function SessionControllerChangePasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionControllerChangePasswordPathParams)
    ], SessionControllerChangePasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SessionControllerChangePasswordQueryParams)
    ], SessionControllerChangePasswordRequest.prototype, "queryParams", void 0);
    return SessionControllerChangePasswordRequest;
}(SpeakeasyBase));
export { SessionControllerChangePasswordRequest };
var SessionControllerChangePasswordResponse = /** @class */ (function (_super) {
    __extends(SessionControllerChangePasswordResponse, _super);
    function SessionControllerChangePasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SessionControllerChangePasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SessionControllerChangePasswordResponse.prototype, "statusCode", void 0);
    return SessionControllerChangePasswordResponse;
}(SpeakeasyBase));
export { SessionControllerChangePasswordResponse };
