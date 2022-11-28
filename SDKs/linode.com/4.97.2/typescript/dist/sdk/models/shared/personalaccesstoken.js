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
// PersonalAccessTokenInput
/**
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
 *
**/
var PersonalAccessTokenInput = /** @class */ (function (_super) {
    __extends(PersonalAccessTokenInput, _super);
    function PersonalAccessTokenInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PersonalAccessTokenInput.prototype, "label", void 0);
    return PersonalAccessTokenInput;
}(SpeakeasyBase));
export { PersonalAccessTokenInput };
// PersonalAccessToken
/**
 * A Personal Access Token is a token generated manually to access the API without going through an OAuth login.  Personal Access Tokens can have scopes just like OAuth tokens do, and are commonly used to give access to command-line tools like the Linode CLI, or when writing your own integrations.
 *
**/
var PersonalAccessToken = /** @class */ (function (_super) {
    __extends(PersonalAccessToken, _super);
    function PersonalAccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], PersonalAccessToken.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], PersonalAccessToken.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PersonalAccessToken.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PersonalAccessToken.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", String)
    ], PersonalAccessToken.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], PersonalAccessToken.prototype, "token", void 0);
    return PersonalAccessToken;
}(SpeakeasyBase));
export { PersonalAccessToken };
