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
import { Status } from "./status";
// ProductSetInput
/**
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
var ProductSetInput = /** @class */ (function (_super) {
    __extends(ProductSetInput, _super);
    function ProductSetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ProductSetInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexError" }),
        __metadata("design:type", Status)
    ], ProductSetInput.prototype, "indexError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductSetInput.prototype, "name", void 0);
    return ProductSetInput;
}(SpeakeasyBase));
export { ProductSetInput };
// ProductSet
/**
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
var ProductSet = /** @class */ (function (_super) {
    __extends(ProductSet, _super);
    function ProductSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ProductSet.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexError" }),
        __metadata("design:type", Status)
    ], ProductSet.prototype, "indexError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexTime" }),
        __metadata("design:type", String)
    ], ProductSet.prototype, "indexTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductSet.prototype, "name", void 0);
    return ProductSet;
}(SpeakeasyBase));
export { ProductSet };
