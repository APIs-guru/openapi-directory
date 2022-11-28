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
import { NotificationConfig } from "./notificationconfig";
import { Hl7V2NotificationConfig } from "./hl7v2notificationconfig";
import { ParserConfig } from "./parserconfig";
// Hl7V2Store
/**
 * Represents an HL7v2 store.
**/
var Hl7V2Store = /** @class */ (function (_super) {
    __extends(Hl7V2Store, _super);
    function Hl7V2Store() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Hl7V2Store.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Hl7V2Store.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", NotificationConfig)
    ], Hl7V2Store.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfigs", elemType: Hl7V2NotificationConfig }),
        __metadata("design:type", Array)
    ], Hl7V2Store.prototype, "notificationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parserConfig" }),
        __metadata("design:type", ParserConfig)
    ], Hl7V2Store.prototype, "parserConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectDuplicateMessage" }),
        __metadata("design:type", Boolean)
    ], Hl7V2Store.prototype, "rejectDuplicateMessage", void 0);
    return Hl7V2Store;
}(SpeakeasyBase));
export { Hl7V2Store };
