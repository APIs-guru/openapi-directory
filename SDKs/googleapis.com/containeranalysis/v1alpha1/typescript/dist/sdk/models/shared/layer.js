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
export var LayerDirectiveEnum;
(function (LayerDirectiveEnum) {
    LayerDirectiveEnum["DirectiveUnspecified"] = "DIRECTIVE_UNSPECIFIED";
    LayerDirectiveEnum["Maintainer"] = "MAINTAINER";
    LayerDirectiveEnum["Run"] = "RUN";
    LayerDirectiveEnum["Cmd"] = "CMD";
    LayerDirectiveEnum["Label"] = "LABEL";
    LayerDirectiveEnum["Expose"] = "EXPOSE";
    LayerDirectiveEnum["Env"] = "ENV";
    LayerDirectiveEnum["Add"] = "ADD";
    LayerDirectiveEnum["Copy"] = "COPY";
    LayerDirectiveEnum["Entrypoint"] = "ENTRYPOINT";
    LayerDirectiveEnum["Volume"] = "VOLUME";
    LayerDirectiveEnum["User"] = "USER";
    LayerDirectiveEnum["Workdir"] = "WORKDIR";
    LayerDirectiveEnum["Arg"] = "ARG";
    LayerDirectiveEnum["Onbuild"] = "ONBUILD";
    LayerDirectiveEnum["Stopsignal"] = "STOPSIGNAL";
    LayerDirectiveEnum["Healthcheck"] = "HEALTHCHECK";
    LayerDirectiveEnum["Shell"] = "SHELL";
})(LayerDirectiveEnum || (LayerDirectiveEnum = {}));
// Layer
/**
 * Layer holds metadata specific to a layer of a Docker image.
**/
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arguments" }),
        __metadata("design:type", String)
    ], Layer.prototype, "arguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directive" }),
        __metadata("design:type", String)
    ], Layer.prototype, "directive", void 0);
    return Layer;
}(SpeakeasyBase));
export { Layer };
