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
var OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry = /** @class */ (function (_super) {
    __extends(OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry, _super);
    function OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry.prototype, "name", void 0);
    return OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry;
}(SpeakeasyBase));
export { OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry };
var OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema = /** @class */ (function (_super) {
    __extends(OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema, _super);
    function OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8SchemaEntry }),
        __metadata("design:type", Array)
    ], OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema.prototype, "entry", void 0);
    return OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema;
}(SpeakeasyBase));
export { OnearchitecturesGetResponses200ContentApplication1xmlPercent20charsetEqualUtf8Schema };
