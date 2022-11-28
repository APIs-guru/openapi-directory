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
import { EndpointPhoneFrom } from "./endpointphonefrom";
export var CreateCallRequestAnswerUrlAnswerMethodEnum;
(function (CreateCallRequestAnswerUrlAnswerMethodEnum) {
    CreateCallRequestAnswerUrlAnswerMethodEnum["Post"] = "POST";
    CreateCallRequestAnswerUrlAnswerMethodEnum["Get"] = "GET";
})(CreateCallRequestAnswerUrlAnswerMethodEnum || (CreateCallRequestAnswerUrlAnswerMethodEnum = {}));
export var CreateCallRequestAnswerUrlEventMethodEnum;
(function (CreateCallRequestAnswerUrlEventMethodEnum) {
    CreateCallRequestAnswerUrlEventMethodEnum["Post"] = "POST";
    CreateCallRequestAnswerUrlEventMethodEnum["Get"] = "GET";
})(CreateCallRequestAnswerUrlEventMethodEnum || (CreateCallRequestAnswerUrlEventMethodEnum = {}));
export var CreateCallRequestAnswerUrlMachineDetectionEnum;
(function (CreateCallRequestAnswerUrlMachineDetectionEnum) {
    CreateCallRequestAnswerUrlMachineDetectionEnum["Continue"] = "continue";
    CreateCallRequestAnswerUrlMachineDetectionEnum["Hangup"] = "hangup";
})(CreateCallRequestAnswerUrlMachineDetectionEnum || (CreateCallRequestAnswerUrlMachineDetectionEnum = {}));
var CreateCallRequestAnswerUrl = /** @class */ (function (_super) {
    __extends(CreateCallRequestAnswerUrl, _super);
    function CreateCallRequestAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_method" }),
        __metadata("design:type", String)
    ], CreateCallRequestAnswerUrl.prototype, "answerMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_url" }),
        __metadata("design:type", Array)
    ], CreateCallRequestAnswerUrl.prototype, "answerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_method" }),
        __metadata("design:type", String)
    ], CreateCallRequestAnswerUrl.prototype, "eventMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", Array)
    ], CreateCallRequestAnswerUrl.prototype, "eventUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", EndpointPhoneFrom)
    ], CreateCallRequestAnswerUrl.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length_timer" }),
        __metadata("design:type", Number)
    ], CreateCallRequestAnswerUrl.prototype, "lengthTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machine_detection" }),
        __metadata("design:type", String)
    ], CreateCallRequestAnswerUrl.prototype, "machineDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=random_from_number" }),
        __metadata("design:type", Boolean)
    ], CreateCallRequestAnswerUrl.prototype, "randomFromNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ringing_timer" }),
        __metadata("design:type", Number)
    ], CreateCallRequestAnswerUrl.prototype, "ringingTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", Array)
    ], CreateCallRequestAnswerUrl.prototype, "to", void 0);
    return CreateCallRequestAnswerUrl;
}(SpeakeasyBase));
export { CreateCallRequestAnswerUrl };
