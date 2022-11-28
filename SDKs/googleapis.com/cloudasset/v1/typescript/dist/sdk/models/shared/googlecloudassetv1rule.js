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
import { Expr } from "./expr";
import { GoogleCloudAssetV1StringValues } from "./googlecloudassetv1stringvalues";
// GoogleCloudAssetV1Rule
/**
 * Represents a rule defined in an organization policy
**/
var GoogleCloudAssetV1Rule = /** @class */ (function (_super) {
    __extends(GoogleCloudAssetV1Rule, _super);
    function GoogleCloudAssetV1Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAll" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssetV1Rule.prototype, "allowAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", Expr)
    ], GoogleCloudAssetV1Rule.prototype, "condition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denyAll" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssetV1Rule.prototype, "denyAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforce" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssetV1Rule.prototype, "enforce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", GoogleCloudAssetV1StringValues)
    ], GoogleCloudAssetV1Rule.prototype, "values", void 0);
    return GoogleCloudAssetV1Rule;
}(SpeakeasyBase));
export { GoogleCloudAssetV1Rule };
