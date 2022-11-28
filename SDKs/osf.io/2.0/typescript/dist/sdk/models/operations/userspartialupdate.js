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
var UsersPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(UsersPartialUpdatePathParams, _super);
    function UsersPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], UsersPartialUpdatePathParams.prototype, "userId", void 0);
    return UsersPartialUpdatePathParams;
}(SpeakeasyBase));
export { UsersPartialUpdatePathParams };
// UsersPartialUpdateUserAttributesInput
/**
 * The properties of the user entity.
**/
var UsersPartialUpdateUserAttributesInput = /** @class */ (function (_super) {
    __extends(UsersPartialUpdateUserAttributesInput, _super);
    function UsersPartialUpdateUserAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family_name" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=full_name" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=given_name" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_names" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "middleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "suffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UsersPartialUpdateUserAttributesInput.prototype, "timezone", void 0);
    return UsersPartialUpdateUserAttributesInput;
}(SpeakeasyBase));
export { UsersPartialUpdateUserAttributesInput };
var UsersPartialUpdateUserInput = /** @class */ (function (_super) {
    __extends(UsersPartialUpdateUserInput, _super);
    function UsersPartialUpdateUserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", UsersPartialUpdateUserAttributesInput)
    ], UsersPartialUpdateUserInput.prototype, "attributes", void 0);
    return UsersPartialUpdateUserInput;
}(SpeakeasyBase));
export { UsersPartialUpdateUserInput };
var UsersPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(UsersPartialUpdateRequest, _super);
    function UsersPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UsersPartialUpdatePathParams)
    ], UsersPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UsersPartialUpdateUserInput)
    ], UsersPartialUpdateRequest.prototype, "request", void 0);
    return UsersPartialUpdateRequest;
}(SpeakeasyBase));
export { UsersPartialUpdateRequest };
var UsersPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(UsersPartialUpdateResponse, _super);
    function UsersPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UsersPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UsersPartialUpdateResponse.prototype, "statusCode", void 0);
    return UsersPartialUpdateResponse;
}(SpeakeasyBase));
export { UsersPartialUpdateResponse };
