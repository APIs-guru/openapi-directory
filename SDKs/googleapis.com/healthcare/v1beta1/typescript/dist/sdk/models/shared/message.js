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
import { ParsedData } from "./parseddata";
import { PatientId } from "./patientid";
import { SchematizedData } from "./schematizeddata";
// Message
/**
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Message.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], Message.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Message.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageType" }),
        __metadata("design:type", String)
    ], Message.prototype, "messageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Message.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parsedData" }),
        __metadata("design:type", ParsedData)
    ], Message.prototype, "parsedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patientIds", elemType: PatientId }),
        __metadata("design:type", Array)
    ], Message.prototype, "patientIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schematizedData" }),
        __metadata("design:type", SchematizedData)
    ], Message.prototype, "schematizedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendFacility" }),
        __metadata("design:type", String)
    ], Message.prototype, "sendFacility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], Message.prototype, "sendTime", void 0);
    return Message;
}(SpeakeasyBase));
export { Message };
// MessageInput
/**
 * A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
**/
var MessageInput = /** @class */ (function (_super) {
    __extends(MessageInput, _super);
    function MessageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MessageInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageType" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "messageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parsedData" }),
        __metadata("design:type", ParsedData)
    ], MessageInput.prototype, "parsedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patientIds", elemType: PatientId }),
        __metadata("design:type", Array)
    ], MessageInput.prototype, "patientIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schematizedData" }),
        __metadata("design:type", SchematizedData)
    ], MessageInput.prototype, "schematizedData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendFacility" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "sendFacility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendTime" }),
        __metadata("design:type", String)
    ], MessageInput.prototype, "sendTime", void 0);
    return MessageInput;
}(SpeakeasyBase));
export { MessageInput };
