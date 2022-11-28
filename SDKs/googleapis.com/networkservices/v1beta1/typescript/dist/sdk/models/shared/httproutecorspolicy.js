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
// HttpRouteCorsPolicy
/**
 * The Specification for allowing client side cross-origin requests.
**/
var HttpRouteCorsPolicy = /** @class */ (function (_super) {
    __extends(HttpRouteCorsPolicy, _super);
    function HttpRouteCorsPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowCredentials" }),
        __metadata("design:type", Boolean)
    ], HttpRouteCorsPolicy.prototype, "allowCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowHeaders" }),
        __metadata("design:type", Array)
    ], HttpRouteCorsPolicy.prototype, "allowHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowMethods" }),
        __metadata("design:type", Array)
    ], HttpRouteCorsPolicy.prototype, "allowMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowOriginRegexes" }),
        __metadata("design:type", Array)
    ], HttpRouteCorsPolicy.prototype, "allowOriginRegexes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowOrigins" }),
        __metadata("design:type", Array)
    ], HttpRouteCorsPolicy.prototype, "allowOrigins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], HttpRouteCorsPolicy.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exposeHeaders" }),
        __metadata("design:type", Array)
    ], HttpRouteCorsPolicy.prototype, "exposeHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxAge" }),
        __metadata("design:type", String)
    ], HttpRouteCorsPolicy.prototype, "maxAge", void 0);
    return HttpRouteCorsPolicy;
}(SpeakeasyBase));
export { HttpRouteCorsPolicy };
