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
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
export var GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;
(function (GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum) {
    GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum["LabelViewBasic"] = "LABEL_VIEW_BASIC";
    GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum["LabelViewFull"] = "LABEL_VIEW_FULL";
})(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum || (GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = {}));
// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
/**
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
**/
var GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput, _super);
    function GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput }),
        __metadata("design:type", Array)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput.prototype, "requests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput.prototype, "useAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput.prototype, "view", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeControl" }),
        __metadata("design:type", GoogleAppsDriveLabelsV2betaWriteControl)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput.prototype, "writeControl", void 0);
    return GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput };
