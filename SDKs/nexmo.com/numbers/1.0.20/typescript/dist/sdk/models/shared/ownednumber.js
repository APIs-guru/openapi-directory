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
var Ownednumber = /** @class */ (function (_super) {
    __extends(Ownednumber, _super);
    function Ownednumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], Ownednumber.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messagesCallbackType" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "messagesCallbackType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messagesCallbackValue" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "messagesCallbackValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moHttpUrl" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "moHttpUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msisdn" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "msisdn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceCallbackType" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "voiceCallbackType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceCallbackValue" }),
        __metadata("design:type", String)
    ], Ownednumber.prototype, "voiceCallbackValue", void 0);
    return Ownednumber;
}(SpeakeasyBase));
export { Ownednumber };
