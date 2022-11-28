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
// VacationSettings
/**
 * Vacation auto-reply settings for an account. These settings correspond to the "Vacation responder" feature in the web interface.
**/
var VacationSettings = /** @class */ (function (_super) {
    __extends(VacationSettings, _super);
    function VacationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoReply" }),
        __metadata("design:type", Boolean)
    ], VacationSettings.prototype, "enableAutoReply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], VacationSettings.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseBodyHtml" }),
        __metadata("design:type", String)
    ], VacationSettings.prototype, "responseBodyHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseBodyPlainText" }),
        __metadata("design:type", String)
    ], VacationSettings.prototype, "responseBodyPlainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseSubject" }),
        __metadata("design:type", String)
    ], VacationSettings.prototype, "responseSubject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictToContacts" }),
        __metadata("design:type", Boolean)
    ], VacationSettings.prototype, "restrictToContacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictToDomain" }),
        __metadata("design:type", Boolean)
    ], VacationSettings.prototype, "restrictToDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], VacationSettings.prototype, "startTime", void 0);
    return VacationSettings;
}(SpeakeasyBase));
export { VacationSettings };
