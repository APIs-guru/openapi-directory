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
import { Advice } from "./advice";
export var ConfigChangeChangeTypeEnum;
(function (ConfigChangeChangeTypeEnum) {
    ConfigChangeChangeTypeEnum["ChangeTypeUnspecified"] = "CHANGE_TYPE_UNSPECIFIED";
    ConfigChangeChangeTypeEnum["Added"] = "ADDED";
    ConfigChangeChangeTypeEnum["Removed"] = "REMOVED";
    ConfigChangeChangeTypeEnum["Modified"] = "MODIFIED";
})(ConfigChangeChangeTypeEnum || (ConfigChangeChangeTypeEnum = {}));
// ConfigChange
/**
 * Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
**/
var ConfigChange = /** @class */ (function (_super) {
    __extends(ConfigChange, _super);
    function ConfigChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advices", elemType: Advice }),
        __metadata("design:type", Array)
    ], ConfigChange.prototype, "advices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeType" }),
        __metadata("design:type", String)
    ], ConfigChange.prototype, "changeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=element" }),
        __metadata("design:type", String)
    ], ConfigChange.prototype, "element", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newValue" }),
        __metadata("design:type", String)
    ], ConfigChange.prototype, "newValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oldValue" }),
        __metadata("design:type", String)
    ], ConfigChange.prototype, "oldValue", void 0);
    return ConfigChange;
}(SpeakeasyBase));
export { ConfigChange };
