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
export var NumberDetailsUpdateMessagesCallbackTypeEnum;
(function (NumberDetailsUpdateMessagesCallbackTypeEnum) {
    NumberDetailsUpdateMessagesCallbackTypeEnum["App"] = "app";
})(NumberDetailsUpdateMessagesCallbackTypeEnum || (NumberDetailsUpdateMessagesCallbackTypeEnum = {}));
export var NumberDetailsUpdateVoiceCallbackTypeEnum;
(function (NumberDetailsUpdateVoiceCallbackTypeEnum) {
    NumberDetailsUpdateVoiceCallbackTypeEnum["Sip"] = "sip";
    NumberDetailsUpdateVoiceCallbackTypeEnum["Tel"] = "tel";
    NumberDetailsUpdateVoiceCallbackTypeEnum["App"] = "app";
})(NumberDetailsUpdateVoiceCallbackTypeEnum || (NumberDetailsUpdateVoiceCallbackTypeEnum = {}));
var NumberDetailsUpdate = /** @class */ (function (_super) {
    __extends(NumberDetailsUpdate, _super);
    function NumberDetailsUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=app_id;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "form, name=messagesCallbackType;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "messagesCallbackType", void 0);
    __decorate([
        Metadata({ data: "form, name=messagesCallbackValue;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "messagesCallbackValue", void 0);
    __decorate([
        Metadata({ data: "form, name=moHttpUrl;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "moHttpUrl", void 0);
    __decorate([
        Metadata({ data: "form, name=moSmppSysType;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "moSmppSysType", void 0);
    __decorate([
        Metadata({ data: "form, name=msisdn;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "msisdn", void 0);
    __decorate([
        Metadata({ data: "form, name=voiceCallbackType;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "voiceCallbackType", void 0);
    __decorate([
        Metadata({ data: "form, name=voiceCallbackValue;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "voiceCallbackValue", void 0);
    __decorate([
        Metadata({ data: "form, name=voiceStatusCallback;" }),
        __metadata("design:type", String)
    ], NumberDetailsUpdate.prototype, "voiceStatusCallback", void 0);
    return NumberDetailsUpdate;
}(SpeakeasyBase));
export { NumberDetailsUpdate };
