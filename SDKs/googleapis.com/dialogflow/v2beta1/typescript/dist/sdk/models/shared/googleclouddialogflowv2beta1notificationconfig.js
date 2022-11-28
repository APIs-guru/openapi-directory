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
export var GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum;
(function (GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum) {
    GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum["MessageFormatUnspecified"] = "MESSAGE_FORMAT_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum["Proto"] = "PROTO";
    GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum["Json"] = "JSON";
})(GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum || (GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum = {}));
// GoogleCloudDialogflowV2beta1NotificationConfig
/**
 * Defines notification behavior.
**/
var GoogleCloudDialogflowV2beta1NotificationConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1NotificationConfig, _super);
    function GoogleCloudDialogflowV2beta1NotificationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageFormat" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1NotificationConfig.prototype, "messageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1NotificationConfig.prototype, "topic", void 0);
    return GoogleCloudDialogflowV2beta1NotificationConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1NotificationConfig };
