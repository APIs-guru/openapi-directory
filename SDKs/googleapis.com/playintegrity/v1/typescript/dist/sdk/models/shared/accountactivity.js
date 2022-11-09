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
export var AccountActivityActivityLevelEnum;
(function (AccountActivityActivityLevelEnum) {
    AccountActivityActivityLevelEnum["ActivityLevelUnspecified"] = "ACTIVITY_LEVEL_UNSPECIFIED";
    AccountActivityActivityLevelEnum["Unevaluated"] = "UNEVALUATED";
    AccountActivityActivityLevelEnum["Unusual"] = "UNUSUAL";
    AccountActivityActivityLevelEnum["Unknown"] = "UNKNOWN";
    AccountActivityActivityLevelEnum["TypicalBasic"] = "TYPICAL_BASIC";
    AccountActivityActivityLevelEnum["TypicalStrong"] = "TYPICAL_STRONG";
})(AccountActivityActivityLevelEnum || (AccountActivityActivityLevelEnum = {}));
// AccountActivity
/**
 * Contains a signal helping apps differentiating between likely genuine users and likely non-genuine traffic (such as accounts being used for fraud, accounts used by automated traffic, or accounts used in device farms) based on the presence and volume of Play store activity.
**/
var AccountActivity = /** @class */ (function (_super) {
    __extends(AccountActivity, _super);
    function AccountActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activityLevel" }),
        __metadata("design:type", String)
    ], AccountActivity.prototype, "activityLevel", void 0);
    return AccountActivity;
}(SpeakeasyBase));
export { AccountActivity };
