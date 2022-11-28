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
import { Command } from "./command";
// Contact
/**
 * A person or group that can be used as a creator or a contact.
**/
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptCommands", elemType: Command }),
        __metadata("design:type", Array)
    ], Contact.prototype, "acceptCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acceptTypes" }),
        __metadata("design:type", Array)
    ], Contact.prototype, "acceptTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Contact.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Contact.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrls" }),
        __metadata("design:type", Array)
    ], Contact.prototype, "imageUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Contact.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], Contact.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], Contact.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharingFeatures" }),
        __metadata("design:type", Array)
    ], Contact.prototype, "sharingFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Contact.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speakableName" }),
        __metadata("design:type", String)
    ], Contact.prototype, "speakableName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Contact.prototype, "type", void 0);
    return Contact;
}(SpeakeasyBase));
export { Contact };
