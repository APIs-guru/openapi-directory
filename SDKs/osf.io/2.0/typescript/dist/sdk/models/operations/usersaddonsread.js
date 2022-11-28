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
var UsersAddonsReadPathParams = /** @class */ (function (_super) {
    __extends(UsersAddonsReadPathParams, _super);
    function UsersAddonsReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], UsersAddonsReadPathParams.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], UsersAddonsReadPathParams.prototype, "userId", void 0);
    return UsersAddonsReadPathParams;
}(SpeakeasyBase));
export { UsersAddonsReadPathParams };
var UsersAddonsReadRequest = /** @class */ (function (_super) {
    __extends(UsersAddonsReadRequest, _super);
    function UsersAddonsReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersAddonsReadPathParams)
    ], UsersAddonsReadRequest.prototype, "pathParams", void 0);
    return UsersAddonsReadRequest;
}(SpeakeasyBase));
export { UsersAddonsReadRequest };
var UsersAddonsReadResponse = /** @class */ (function (_super) {
    __extends(UsersAddonsReadResponse, _super);
    function UsersAddonsReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UsersAddonsReadResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersAddonsReadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersAddonsReadResponse.prototype, "statusCode", void 0);
    return UsersAddonsReadResponse;
}(SpeakeasyBase));
export { UsersAddonsReadResponse };
