package shared



type SentenceDependencyOut struct {
    Dependencies DependenciesOut `json:"dependencies"`
    Sentence string `json:"sentence"`
    
}

