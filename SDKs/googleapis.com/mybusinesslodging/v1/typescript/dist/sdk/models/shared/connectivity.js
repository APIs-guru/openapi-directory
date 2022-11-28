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
export var ConnectivityFreeWifiExceptionEnum;
(function (ConnectivityFreeWifiExceptionEnum) {
    ConnectivityFreeWifiExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ConnectivityFreeWifiExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ConnectivityFreeWifiExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ConnectivityFreeWifiExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ConnectivityFreeWifiExceptionEnum || (ConnectivityFreeWifiExceptionEnum = {}));
export var ConnectivityPublicAreaWifiAvailableExceptionEnum;
(function (ConnectivityPublicAreaWifiAvailableExceptionEnum) {
    ConnectivityPublicAreaWifiAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ConnectivityPublicAreaWifiAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ConnectivityPublicAreaWifiAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ConnectivityPublicAreaWifiAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ConnectivityPublicAreaWifiAvailableExceptionEnum || (ConnectivityPublicAreaWifiAvailableExceptionEnum = {}));
export var ConnectivityPublicInternetTerminalExceptionEnum;
(function (ConnectivityPublicInternetTerminalExceptionEnum) {
    ConnectivityPublicInternetTerminalExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ConnectivityPublicInternetTerminalExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ConnectivityPublicInternetTerminalExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ConnectivityPublicInternetTerminalExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ConnectivityPublicInternetTerminalExceptionEnum || (ConnectivityPublicInternetTerminalExceptionEnum = {}));
export var ConnectivityWifiAvailableExceptionEnum;
(function (ConnectivityWifiAvailableExceptionEnum) {
    ConnectivityWifiAvailableExceptionEnum["ExceptionUnspecified"] = "EXCEPTION_UNSPECIFIED";
    ConnectivityWifiAvailableExceptionEnum["UnderConstruction"] = "UNDER_CONSTRUCTION";
    ConnectivityWifiAvailableExceptionEnum["DependentOnSeason"] = "DEPENDENT_ON_SEASON";
    ConnectivityWifiAvailableExceptionEnum["DependentOnDayOfWeek"] = "DEPENDENT_ON_DAY_OF_WEEK";
})(ConnectivityWifiAvailableExceptionEnum || (ConnectivityWifiAvailableExceptionEnum = {}));
// Connectivity
/**
 * The ways in which the property provides guests with the ability to access the internet.
**/
var Connectivity = /** @class */ (function (_super) {
    __extends(Connectivity, _super);
    function Connectivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWifi" }),
        __metadata("design:type", Boolean)
    ], Connectivity.prototype, "freeWifi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeWifiException" }),
        __metadata("design:type", String)
    ], Connectivity.prototype, "freeWifiException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAreaWifiAvailable" }),
        __metadata("design:type", Boolean)
    ], Connectivity.prototype, "publicAreaWifiAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAreaWifiAvailableException" }),
        __metadata("design:type", String)
    ], Connectivity.prototype, "publicAreaWifiAvailableException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicInternetTerminal" }),
        __metadata("design:type", Boolean)
    ], Connectivity.prototype, "publicInternetTerminal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicInternetTerminalException" }),
        __metadata("design:type", String)
    ], Connectivity.prototype, "publicInternetTerminalException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiAvailable" }),
        __metadata("design:type", Boolean)
    ], Connectivity.prototype, "wifiAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiAvailableException" }),
        __metadata("design:type", String)
    ], Connectivity.prototype, "wifiAvailableException", void 0);
    return Connectivity;
}(SpeakeasyBase));
export { Connectivity };
