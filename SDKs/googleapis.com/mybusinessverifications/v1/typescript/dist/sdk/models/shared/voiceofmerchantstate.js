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
import { ComplyWithGuidelines } from "./complywithguidelines";
import { Verify } from "./verify";
// VoiceOfMerchantState
/**
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
var VoiceOfMerchantState = /** @class */ (function (_super) {
    __extends(VoiceOfMerchantState, _super);
    function VoiceOfMerchantState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=complyWithGuidelines" }),
        __metadata("design:type", ComplyWithGuidelines)
    ], VoiceOfMerchantState.prototype, "complyWithGuidelines", void 0);
    __decorate([
        Metadata({ data: "json, name=hasBusinessAuthority" }),
        __metadata("design:type", Boolean)
    ], VoiceOfMerchantState.prototype, "hasBusinessAuthority", void 0);
    __decorate([
        Metadata({ data: "json, name=hasVoiceOfMerchant" }),
        __metadata("design:type", Boolean)
    ], VoiceOfMerchantState.prototype, "hasVoiceOfMerchant", void 0);
    __decorate([
        Metadata({ data: "json, name=resolveOwnershipConflict" }),
        __metadata("design:type", Map)
    ], VoiceOfMerchantState.prototype, "resolveOwnershipConflict", void 0);
    __decorate([
        Metadata({ data: "json, name=verify" }),
        __metadata("design:type", Verify)
    ], VoiceOfMerchantState.prototype, "verify", void 0);
    __decorate([
        Metadata({ data: "json, name=waitForVoiceOfMerchant" }),
        __metadata("design:type", Map)
    ], VoiceOfMerchantState.prototype, "waitForVoiceOfMerchant", void 0);
    return VoiceOfMerchantState;
}(SpeakeasyBase));
export { VoiceOfMerchantState };
