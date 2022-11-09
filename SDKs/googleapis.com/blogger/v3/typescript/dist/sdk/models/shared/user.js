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
// UserBlogs
/**
 * The container of blogs for this user.
**/
var UserBlogs = /** @class */ (function (_super) {
    __extends(UserBlogs, _super);
    function UserBlogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], UserBlogs.prototype, "selfLink", void 0);
    return UserBlogs;
}(SpeakeasyBase));
export { UserBlogs };
// UserLocale
/**
 * This user's locale
**/
var UserLocale = /** @class */ (function (_super) {
    __extends(UserLocale, _super);
    function UserLocale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], UserLocale.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserLocale.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "json, name=variant" }),
        __metadata("design:type", String)
    ], UserLocale.prototype, "variant", void 0);
    return UserLocale;
}(SpeakeasyBase));
export { UserLocale };
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=about" }),
        __metadata("design:type", String)
    ], User.prototype, "about", void 0);
    __decorate([
        Metadata({ data: "json, name=blogs" }),
        __metadata("design:type", UserBlogs)
    ], User.prototype, "blogs", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], User.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], User.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], User.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=locale" }),
        __metadata("design:type", UserLocale)
    ], User.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], User.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], User.prototype, "url", void 0);
    return User;
}(SpeakeasyBase));
export { User };
