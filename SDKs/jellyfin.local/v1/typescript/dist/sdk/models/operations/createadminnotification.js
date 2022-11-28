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
var CreateAdminNotificationQueryParams = /** @class */ (function (_super) {
    __extends(CreateAdminNotificationQueryParams, _super);
    function CreateAdminNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], CreateAdminNotificationQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" }),
        __metadata("design:type", String)
    ], CreateAdminNotificationQueryParams.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateAdminNotificationQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], CreateAdminNotificationQueryParams.prototype, "url", void 0);
    return CreateAdminNotificationQueryParams;
}(SpeakeasyBase));
export { CreateAdminNotificationQueryParams };
var CreateAdminNotificationSecurity = /** @class */ (function (_super) {
    __extends(CreateAdminNotificationSecurity, _super);
    function CreateAdminNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], CreateAdminNotificationSecurity.prototype, "customAuthentication", void 0);
    return CreateAdminNotificationSecurity;
}(SpeakeasyBase));
export { CreateAdminNotificationSecurity };
var CreateAdminNotificationRequest = /** @class */ (function (_super) {
    __extends(CreateAdminNotificationRequest, _super);
    function CreateAdminNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAdminNotificationQueryParams)
    ], CreateAdminNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAdminNotificationSecurity)
    ], CreateAdminNotificationRequest.prototype, "security", void 0);
    return CreateAdminNotificationRequest;
}(SpeakeasyBase));
export { CreateAdminNotificationRequest };
var CreateAdminNotificationResponse = /** @class */ (function (_super) {
    __extends(CreateAdminNotificationResponse, _super);
    function CreateAdminNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAdminNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAdminNotificationResponse.prototype, "statusCode", void 0);
    return CreateAdminNotificationResponse;
}(SpeakeasyBase));
export { CreateAdminNotificationResponse };
