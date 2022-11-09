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
var PaginationLinksFirst = /** @class */ (function (_super) {
    __extends(PaginationLinksFirst, _super);
    function PaginationLinksFirst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksFirst.prototype, "href", void 0);
    return PaginationLinksFirst;
}(SpeakeasyBase));
export { PaginationLinksFirst };
var PaginationLinksLast = /** @class */ (function (_super) {
    __extends(PaginationLinksLast, _super);
    function PaginationLinksLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
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
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksNext.prototype, "href", void 0);
    return PaginationLinksNext;
}(SpeakeasyBase));
export { PaginationLinksNext };
var PaginationLinksPrev = /** @class */ (function (_super) {
    __extends(PaginationLinksPrev, _super);
    function PaginationLinksPrev() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], PaginationLinksPrev.prototype, "href", void 0);
    return PaginationLinksPrev;
}(SpeakeasyBase));
export { PaginationLinksPrev };
var PaginationLinks = /** @class */ (function (_super) {
    __extends(PaginationLinks, _super);
    function PaginationLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first" }),
        __metadata("design:type", PaginationLinksFirst)
    ], PaginationLinks.prototype, "first", void 0);
    __decorate([
        Metadata({ data: "json, name=last" }),
        __metadata("design:type", PaginationLinksLast)
    ], PaginationLinks.prototype, "last", void 0);
    __decorate([
        Metadata({ data: "json, name=next" }),
        __metadata("design:type", PaginationLinksNext)
    ], PaginationLinks.prototype, "next", void 0);
    __decorate([
        Metadata({ data: "json, name=prev" }),
        __metadata("design:type", PaginationLinksPrev)
    ], PaginationLinks.prototype, "prev", void 0);
    return PaginationLinks;
}(SpeakeasyBase));
export { PaginationLinks };
