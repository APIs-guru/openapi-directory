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
var PaginationLinksLast = /** @class */ (function (_super) {
    __extends(PaginationLinksLast, _super);
    function PaginationLinksLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksLast.prototype, "href", void 0);
    return PaginationLinksLast;
}(SpeakeasyBase));
export { PaginationLinksLast };
var PaginationLinksNext = /** @class */ (function (_super) {
    __extends(PaginationLinksNext, _super);
    function PaginationLinksNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksNext.prototype, "href", void 0);
    return PaginationLinksNext;
}(SpeakeasyBase));
export { PaginationLinksNext };
var PaginationLinksSelf = /** @class */ (function (_super) {
    __extends(PaginationLinksSelf, _super);
    function PaginationLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksSelf.prototype, "href", void 0);
    return PaginationLinksSelf;
}(SpeakeasyBase));
export { PaginationLinksSelf };
// PaginationLinks
/**
 * Container containing self, next and last page links.
**/
var PaginationLinks = /** @class */ (function (_super) {
    __extends(PaginationLinks, _super);
    function PaginationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last" }),
        __metadata("design:type", PaginationLinksLast)
    ], PaginationLinks.prototype, "last", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", PaginationLinksNext)
    ], PaginationLinks.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", PaginationLinksSelf)
    ], PaginationLinks.prototype, "self", void 0);
    return PaginationLinks;
}(SpeakeasyBase));
export { PaginationLinks };
