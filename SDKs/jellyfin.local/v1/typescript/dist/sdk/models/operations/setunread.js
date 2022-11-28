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
var SetUnreadPathParams = /** @class */ (function (_super) {
    __extends(SetUnreadPathParams, _super);
    function SetUnreadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], SetUnreadPathParams.prototype, "userId", void 0);
    return SetUnreadPathParams;
}(SpeakeasyBase));
export { SetUnreadPathParams };
var SetUnreadSecurity = /** @class */ (function (_super) {
    __extends(SetUnreadSecurity, _super);
    function SetUnreadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SetUnreadSecurity.prototype, "customAuthentication", void 0);
    return SetUnreadSecurity;
}(SpeakeasyBase));
export { SetUnreadSecurity };
var SetUnreadRequest = /** @class */ (function (_super) {
    __extends(SetUnreadRequest, _super);
    function SetUnreadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetUnreadPathParams)
    ], SetUnreadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetUnreadSecurity)
    ], SetUnreadRequest.prototype, "security", void 0);
    return SetUnreadRequest;
}(SpeakeasyBase));
export { SetUnreadRequest };
var SetUnreadResponse = /** @class */ (function (_super) {
    __extends(SetUnreadResponse, _super);
    function SetUnreadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetUnreadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetUnreadResponse.prototype, "statusCode", void 0);
    return SetUnreadResponse;
}(SpeakeasyBase));
export { SetUnreadResponse };
