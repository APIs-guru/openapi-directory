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
var FigiResult = /** @class */ (function (_super) {
    __extends(FigiResult, _super);
    function FigiResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compositeFIGI" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "compositeFigi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchCode" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "exchCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=figi" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "figi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketSector" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "marketSector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityDescription" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "securityDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityType" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "securityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityType2" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "securityType2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareClassFIGI" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "shareClassFigi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticker" }),
        __metadata("design:type", String)
    ], FigiResult.prototype, "ticker", void 0);
    return FigiResult;
}(SpeakeasyBase));
export { FigiResult };
