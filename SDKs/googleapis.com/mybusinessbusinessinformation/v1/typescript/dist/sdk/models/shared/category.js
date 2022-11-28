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
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";
// CategoryInput
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
var CategoryInput = /** @class */ (function (_super) {
    __extends(CategoryInput, _super);
    function CategoryInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategoryInput.prototype, "name", void 0);
    return CategoryInput;
}(SpeakeasyBase));
export { CategoryInput };
// Category
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Category.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moreHoursTypes", elemType: MoreHoursType }),
        __metadata("design:type", Array)
    ], Category.prototype, "moreHoursTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceTypes", elemType: ServiceType }),
        __metadata("design:type", Array)
    ], Category.prototype, "serviceTypes", void 0);
    return Category;
}(SpeakeasyBase));
export { Category };
