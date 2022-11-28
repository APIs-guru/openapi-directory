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
export var ResponseStatusCodeStatusClassEnum;
(function (ResponseStatusCodeStatusClassEnum) {
    ResponseStatusCodeStatusClassEnum["StatusClassUnspecified"] = "STATUS_CLASS_UNSPECIFIED";
    ResponseStatusCodeStatusClassEnum["StatusClass1Xx"] = "STATUS_CLASS_1XX";
    ResponseStatusCodeStatusClassEnum["StatusClass2Xx"] = "STATUS_CLASS_2XX";
    ResponseStatusCodeStatusClassEnum["StatusClass3Xx"] = "STATUS_CLASS_3XX";
    ResponseStatusCodeStatusClassEnum["StatusClass4Xx"] = "STATUS_CLASS_4XX";
    ResponseStatusCodeStatusClassEnum["StatusClass5Xx"] = "STATUS_CLASS_5XX";
    ResponseStatusCodeStatusClassEnum["StatusClassAny"] = "STATUS_CLASS_ANY";
})(ResponseStatusCodeStatusClassEnum || (ResponseStatusCodeStatusClassEnum = {}));
// ResponseStatusCode
/**
 * A status to accept. Either a status code class like "2xx", or an integer status code like "200".
**/
var ResponseStatusCode = /** @class */ (function (_super) {
    __extends(ResponseStatusCode, _super);
    function ResponseStatusCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusClass" }),
        __metadata("design:type", String)
    ], ResponseStatusCode.prototype, "statusClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusValue" }),
        __metadata("design:type", Number)
    ], ResponseStatusCode.prototype, "statusValue", void 0);
    return ResponseStatusCode;
}(SpeakeasyBase));
export { ResponseStatusCode };
