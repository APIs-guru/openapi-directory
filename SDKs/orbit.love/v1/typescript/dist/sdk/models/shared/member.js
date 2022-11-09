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
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bio" }),
        __metadata("design:type", String)
    ], Member.prototype, "bio", void 0);
    __decorate([
        Metadata({ data: "json, name=birthday" }),
        __metadata("design:type", String)
    ], Member.prototype, "birthday", void 0);
    __decorate([
        Metadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], Member.prototype, "company", void 0);
    __decorate([
        Metadata({ data: "json, name=devto" }),
        __metadata("design:type", String)
    ], Member.prototype, "devto", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Member.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=github" }),
        __metadata("design:type", String)
    ], Member.prototype, "github", void 0);
    __decorate([
        Metadata({ data: "json, name=linkedin" }),
        __metadata("design:type", String)
    ], Member.prototype, "linkedin", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Member.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Member.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=pronouns" }),
        __metadata("design:type", String)
    ], Member.prototype, "pronouns", void 0);
    __decorate([
        Metadata({ data: "json, name=shipping_address" }),
        __metadata("design:type", String)
    ], Member.prototype, "shippingAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Member.prototype, "slug", void 0);
    __decorate([
        Metadata({ data: "json, name=tag_list" }),
        __metadata("design:type", String)
    ], Member.prototype, "tagList", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", String)
    ], Member.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=tags_to_add" }),
        __metadata("design:type", String)
    ], Member.prototype, "tagsToAdd", void 0);
    __decorate([
        Metadata({ data: "json, name=teammate" }),
        __metadata("design:type", Boolean)
    ], Member.prototype, "teammate", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Member.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=tshirt" }),
        __metadata("design:type", String)
    ], Member.prototype, "tshirt", void 0);
    __decorate([
        Metadata({ data: "json, name=twitter" }),
        __metadata("design:type", String)
    ], Member.prototype, "twitter", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Member.prototype, "url", void 0);
    return Member;
}(SpeakeasyBase));
export { Member };
